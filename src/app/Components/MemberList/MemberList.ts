// src/app/Components/MemberList/MemberList.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { MemberService } from '../../services/MemberService';
import { MemberModel } from '../../models/MemberModel';

@Component({
  selector: 'app-member-list',
  standalone: true,
  templateUrl: './MemberList.html',
  styleUrls: ['./MemberList.scss'],
  imports: [CommonModule, FormsModule, RouterLink], // Add CommonModule
})
export class MemberListComponent {
  searchQuery: string = '';
  members: MemberModel[] = [];
  filteredMembers: MemberModel[] = [];

  constructor(private memberService: MemberService) {}

  ngOnInit(): void {
    this.members = this.memberService.getMembers();
    this.filteredMembers = this.members;
  }

  onSearch(): void {
    this.filteredMembers = this.members.filter(
      (member) =>
        member.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        member.membershipStatus
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase())
    );
  }
}
