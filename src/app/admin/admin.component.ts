import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { WebSocketService } from '../services/web-socket.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit,OnChanges {

  constructor(public webSocketService: WebSocketService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.webSocketService.openWebSocket();
  }

  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket();
  }


  ngOnChanges(changes: SimpleChanges){
    this.toastr.success('123','456');
  }
}
