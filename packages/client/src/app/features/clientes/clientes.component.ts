import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent {
  searchTerm: string = '';

  // Dados mockados
  clients = [
    {
      id: 1,
      name: 'João Silva',
      email: 'joao@email.com',
      phone: '(11) 98765-4321',
      cpf: '123.456.789-00',
      address: 'Rua A, 123 - São Paulo/SP'
    },
    {
      id: 2,
      name: 'Maria Santos',
      email: 'maria@email.com',
      phone: '(11) 97654-3210',
      cpf: '987.654.321-00',
      address: 'Av. B, 456 - São Paulo/SP'
    },
    {
      id: 3,
      name: 'Pedro Costa',
      email: 'pedro@email.com',
      phone: '(11) 96543-2109',
      cpf: '456.789.123-00',
      address: 'Rua C, 789 - São Paulo/SP'
    }
  ];

  get filteredClients() {
    if (!this.searchTerm) return this.clients;
    
    return this.clients.filter(client =>
      client.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      client.cpf.includes(this.searchTerm)
    );
  }

  addNewClient(): void {
    alert('Funcionalidade de adicionar cliente em desenvolvimento');
  }

  importExcel(): void {
    alert('Funcionalidade de importar Excel em desenvolvimento');
  }

  editClient(client: any): void {
    alert(`Editar cliente: ${client.name}`);
  }

  deleteClient(client: any): void {
    if (confirm(`Deseja realmente excluir o cliente ${client.name}?`)) {
      const index = this.clients.findIndex(c => c.id === client.id);
      if (index > -1) {
        this.clients.splice(index, 1);
      }
    }
  }
}
