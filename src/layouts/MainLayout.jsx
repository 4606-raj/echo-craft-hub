import Header from "../components/ui/Header";

export default function MainLayout({children}) {
    return (
        <div>
            <Header />
            <main>{children}</main>
            {/* <Footer /> */}
        </div>
    )
}