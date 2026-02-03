export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  category: string;
  tags: string[];
  description: string;
  guidelines: string;
  registrationFee?: string;
  cashPrize?: {
    type: 'single' | 'prize-pool' | 'first-second';
    amount?: string;
    first?: string;
    second?: string;
  };
  coordinator?: {
    name: string;
    phone?: string;
  };
  image?: string;
  registrationLink?: string;
}
