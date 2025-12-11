export default function page({ params }: { params: { occasionId: string } }) {
  return <div>Occassions {params.occasionId}</div>;
}
