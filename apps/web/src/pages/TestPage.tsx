import {AppNav} from "../components/AppNav"

export function TestPage() {
    return(
        <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-8 px-6 py-10">
            <section>
            <AppNav />
            <p>This is Brian's test page</p>
            </section>
        </main>
    )
}