export interface ProjectContributor {
  contactId: number;
  canUserEdit: boolean;
  displayOrder: number;
  firstName: string;
  lastName: string;
  fullName: string;
  fullNameInverted: string;
  primaryEmail: string;
  publicEmail: boolean;
  nacontact: boolean;
}
