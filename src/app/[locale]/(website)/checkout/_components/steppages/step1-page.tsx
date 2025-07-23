import AddressesList from "../addresses-list";

type Props = {
  addresses: Address[];
};

export default function ShippingAddressPage({ addresses }: Props) {
  return <AddressesList addresses={addresses} />;
}
