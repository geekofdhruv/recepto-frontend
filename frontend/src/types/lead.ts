export interface Lead {
    id: number;
    name: string;
    location: string;
    isLocked: boolean;
    unlockCredits?: number;
    message: string;
    timeStatus?: string;
    type: string;
    score: number;
    company?: string;
    companyTier?: number;
    updatedTime?: string;
    groupName?: string;
    people?: string[];
    avatarColor: string;
  }