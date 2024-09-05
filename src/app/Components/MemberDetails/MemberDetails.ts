// src/app/Components/MemberDetails/MemberDetails.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from '../../services/MemberService';
import { MemberModel } from '../../models/MemberModel';

@Component({
  selector: 'app-member-details',
  templateUrl: './MemberDetails.html',
  styleUrls: ['./MemberDetails.scss'],
})
export class MemberDetailsComponent implements OnInit {
  member!: MemberModel; // Use non-null assertion if you are sure member will be initialized

  constructor(
    private memberService: MemberService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.member = this.memberService.getMemberById(id)!; // Use non-null assertion if you're sure it's not undefined
  }
}
