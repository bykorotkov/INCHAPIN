
import { Metadata } from "next"
import Layout from "@/components/global/Layout/Layout"
import MainPage from "@/components/pages/MainPage/MainPage"
import Container from "@/components/ui/Container/Container"

export const metadata: Metadata = {
    title: 'Главная'
}

export default function Page() {
  return (
    <Layout >
        <Container>
            <MainPage />
        </Container>
    </Layout>
  )
}
