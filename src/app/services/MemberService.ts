// src/app/services/MemberService.ts
import { Injectable } from '@angular/core';
import { MemberModel } from '../models/MemberModel';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  private members: MemberModel[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+45 1234 5678',
      membershipStatus: 'Active',
      joinedDate: '15-01-2024',
      address: 'Elmvej 123, 8000 Aarhus, Denmark',
      birthdate: '15-05-1985',
      membershipType: 'Admin',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '+45 9876 5432',
      membershipStatus: 'Inactive',
      joinedDate: '10-12-2023',
      address: 'Egavej 456, 1000 København, Denmark',
      birthdate: '22-08-1990',
      membershipType: 'User',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      phone: '+45 4567 8901',
      membershipStatus: 'Active',
      joinedDate: '22-03-2024',
      address: 'Granvej 789, 5000 Odense, Denmark',
      birthdate: '30-11-1978',
      membershipType: 'Support',
    },
    {
      id: 4,
      name: 'Bob Brown',
      email: 'bob.brown@example.com',
      phone: '+45 3210 6543',
      membershipStatus: 'Active',
      joinedDate: '05-11-2023',
      address: 'Ahornvej 101, 4000 Roskilde, Denmark',
      birthdate: '14-02-1982',
      membershipType: 'Admin',
    },
    {
      id: 5,
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      phone: '+45 6543 2109',
      membershipStatus: 'Suspended',
      joinedDate: '28-02-2024',
      address: 'Birkvej 202, 6000 Kolding, Denmark',
      birthdate: '19-07-1995',
      membershipType: 'User',
    },
    {
      id: 6,
      name: 'Michael Wilson',
      email: 'michael.wilson@example.com',
      phone: '+45 7890 1234',
      membershipStatus: 'Active',
      joinedDate: '20-10-2023',
      address: 'Cedervej 303, 7000 Vejle, Denmark',
      birthdate: '01-12-1988',
      membershipType: 'Support',
    },
    {
      id: 7,
      name: 'Laura Green',
      email: 'laura.green@example.com',
      phone: '+45 2345 6789',
      membershipStatus: 'Active',
      joinedDate: '12-06-2024',
      address: 'Lindvej 404, 8000 Aarhus, Denmark',
      birthdate: '05-04-1980',
      membershipType: 'User',
    },
    {
      id: 8,
      name: 'James Lee',
      email: 'james.lee@example.com',
      phone: '+45 3456 7890',
      membershipStatus: 'Inactive',
      joinedDate: '09-08-2023',
      address: 'Poppelvej 505, 1000 København, Denmark',
      birthdate: '22-11-1983',
      membershipType: 'Support',
    },
    {
      id: 9,
      name: 'Olivia White',
      email: 'olivia.white@example.com',
      phone: '+45 4567 8902',
      membershipStatus: 'Active',
      joinedDate: '01-05-2024',
      address: 'Skovvej 606, 5000 Odense, Denmark',
      birthdate: '30-12-1986',
      membershipType: 'Admin',
    },
    {
      id: 10,
      name: 'Ethan Harris',
      email: 'ethan.harris@example.com',
      phone: '+45 5678 9012',
      membershipStatus: 'Suspended',
      joinedDate: '15-09-2023',
      address: 'Kirsebærvej 707, 4000 Roskilde, Denmark',
      birthdate: '18-03-1992',
      membershipType: 'User',
    },
    {
      id: 11,
      name: 'Sophia Martin',
      email: 'sophia.martin@example.com',
      phone: '+45 6789 0123',
      membershipStatus: 'Active',
      joinedDate: '07-02-2024',
      address: 'Egevej 808, 6000 Kolding, Denmark',
      birthdate: '25-09-1989',
      membershipType: 'Support',
    },
    {
      id: 12,
      name: 'William Thompson',
      email: 'william.thompson@example.com',
      phone: '+45 7890 1235',
      membershipStatus: 'Active',
      joinedDate: '23-04-2023',
      address: 'Bøgvej 909, 7000 Vejle, Denmark',
      birthdate: '12-06-1985',
      membershipType: 'Admin',
    },
    {
      id: 13,
      name: 'Mia Anderson',
      email: 'mia.anderson@example.com',
      phone: '+45 8901 2345',
      membershipStatus: 'Inactive',
      joinedDate: '18-11-2023',
      address: 'Jordbærvej 1010, 8000 Aarhus, Denmark',
      birthdate: '16-07-1991',
      membershipType: 'User',
    },
    {
      id: 14,
      name: 'Jacob Clark',
      email: 'jacob.clark@example.com',
      phone: '+45 9012 3456',
      membershipStatus: 'Active',
      joinedDate: '30-05-2024',
      address: 'Æblevej 1111, 1000 København, Denmark',
      birthdate: '02-01-1987',
      membershipType: 'Support',
    },
    {
      id: 15,
      name: 'Amelia Wright',
      email: 'amelia.wright@example.com',
      phone: '+45 0123 4567',
      membershipStatus: 'Suspended',
      joinedDate: '25-07-2023',
      address: 'Hasselvej 1212, 5000 Odense, Denmark',
      birthdate: '11-05-1993',
      membershipType: 'User',
    },
    {
      id: 16,
      name: 'Alexander Lewis',
      email: 'alexander.lewis@example.com',
      phone: '+45 1234 5679',
      membershipStatus: 'Active',
      joinedDate: '14-03-2024',
      address: 'Rosenvej 1313, 4000 Roskilde, Denmark',
      birthdate: '19-09-1984',
      membershipType: 'Admin',
    },
    {
      id: 17,
      name: 'Charlotte King',
      email: 'charlotte.king@example.com',
      phone: '+45 2345 6780',
      membershipStatus: 'Active',
      joinedDate: '11-12-2023',
      address: 'Lærkevej 1414, 6000 Kolding, Denmark',
      birthdate: '29-10-1990',
      membershipType: 'Support',
    },
    {
      id: 18,
      name: 'Daniel Scott',
      email: 'daniel.scott@example.com',
      phone: '+45 3456 7891',
      membershipStatus: 'Inactive',
      joinedDate: '20-08-2023',
      address: 'Fuglevvej 1515, 7000 Vejle, Denmark',
      birthdate: '22-04-1988',
      membershipType: 'User',
    },
    {
      id: 19,
      name: 'Isabella Carter',
      email: 'isabella.carter@example.com',
      phone: '+45 4567 8903',
      membershipStatus: 'Active',
      joinedDate: '03-10-2023',
      address: 'Mosevej 1616, 8000 Aarhus, Denmark',
      birthdate: '07-02-1992',
      membershipType: 'Admin',
    },
    {
      id: 20,
      name: 'Henry Murphy',
      email: 'henry.murphy@example.com',
      phone: '+45 5678 9013',
      membershipStatus: 'Active',
      joinedDate: '06-11-2023',
      address: 'Stenvej 1717, 1000 København, Denmark',
      birthdate: '27-12-1989',
      membershipType: 'Support',
    },
    // Add more mock data here
  ];

  getMembers(): MemberModel[] {
    return this.members;
  }

  getMemberById(id: number): MemberModel | undefined {
    return this.members.find((member) => member.id === id);
  }
}
