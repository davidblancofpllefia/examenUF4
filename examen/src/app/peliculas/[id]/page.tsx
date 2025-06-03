import Detalle from "@/app/componentes/Detalle"

export default async function Page({ params }: { params: { id: string } }) {
  return <Detalle id={params.id} />
}
