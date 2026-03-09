import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  namespace: '/pos'
})
export class PosGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('PosGateway');

  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('join_session')
  handleJoinSession(
    @MessageBody() sessionId: string,
    @ConnectedSocket() client: Socket,
  ) {
    client.join(sessionId);
    this.logger.log(`Client ${client.id} joined session ${sessionId}`);
    
    // Notify the room that a scanner has connected (useful to show a green light on PC)
    this.server.to(sessionId).emit('scanner_connected', { clientId: client.id });
    
    return { event: 'joined', data: sessionId };
  }

  @SubscribeMessage('scan_barcode')
  handleScanBarcode(
    @MessageBody() data: { sessionId: string; code: string; type?: string },
    @ConnectedSocket() client: Socket,
  ) {
    this.logger.log(`Barcode scanned in session ${data.sessionId}: ${data.code}`);
    
    // Broadcast the scanned code to everyone else in the room (which should be the PC)
    client.to(data.sessionId).emit('barcode_scanned', { 
      code: data.code,
      type: data.type || 'unknown'
    });
    
    return { event: 'scan_received', data: true };
  }
}
