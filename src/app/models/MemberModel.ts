export interface MemberModel {
  id: number;
  name: string;
  email: string;
  phone: string;
  membershipStatus: string; // Active, Inactive, Suspended, etc.
  joinedDate: string; // Date in dd-mm-yyyy format
  address: string; // European-style address
  birthdate: string; // Date in dd-mm-yyyy format
  membershipType: 'Admin' | 'User' | 'Support'; // Membership types
}
