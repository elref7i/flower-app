declare type AuthContext = {
  step: string;
  setStep: (step: string) => void;
  email: string;
  setEmail: (email: string) => void;
};

type SearchParams = { [key: string]: string | string[] | undefined };
