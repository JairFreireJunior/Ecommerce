import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produtos;

  constructor() {
    this.produtos = [
      new Produto('Caneta', 10.00, 'https://images.vivara.com.br/Stores/Produtos/CA00000840.jpg'),
      new Produto('Caderno', 15.00, 'https://encurtador.com.br/swKWX'),
      new Produto('Caneca', 5.00, 'https://image.flaticon.com/icons/png/512/31/31805.png'),
      new Produto('Carteira', 25.00, 'https://encurtador.com.br/ltPX5')
    ];
  }

  ngOnInit() {
  }

}
