import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { MemberService } from '../../services/MemberService';
import { MemberModel } from '../../models/MemberModel';

@Component({
  selector: 'app-member-details',
  standalone: true,
  templateUrl: './MemberDetails.html',
  styleUrls: ['./MemberDetails.scss'],
  imports: [CommonModule], // Add CommonModule here
})
export class MemberDetailsComponent implements OnInit {
  member: MemberModel | null = null;
  isLoading = true;

  constructor(
    private memberService: MemberService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.member = this.memberService.getMemberById(id) || null;
  }
}
