import AuthProvider from "@/app/provider/NextAuth";
import Login from "@/app/components/Login";
import Link from "next/link"

const Home = () => {
    return (
        <AuthProvider>
            <h1>NUTMEG HUB</h1>
            <Link href="./Timeline"><button>get started</button></Link>
            <Login/>
        </AuthProvider>
    );
};

export default Home;