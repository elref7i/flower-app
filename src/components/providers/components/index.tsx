import ReactQueryProvider from "./react-query-provider";

type ProvidersProps = {
  children: React.ReactNode;
};
export default function Providers({ children }: ProvidersProps) {
  return (
    // Add Next auth and next intel provider and delete this comment eng Ehab
    <ReactQueryProvider>{children}</ReactQueryProvider>
  );
}
