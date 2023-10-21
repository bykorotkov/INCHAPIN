"use client"
import Layout from "@/components/global/Layout/Layout"
import MainPage from "@/components/pages/MainPage/MainPage"
import Container from "@/components/global/Container/Container"
import { Provider } from "react-redux"
import { setupStore } from "@/store/store"

const store = setupStore()

export default function Page() {
    return (
        <Provider store={store}>
            <Layout>
                <Container>
                    <MainPage />
                </Container>
            </Layout>
        </Provider>
    )
}
