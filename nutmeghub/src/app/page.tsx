import AuthProvider from "@/app/provider/NextAuth";
import Login from "@/app/components/Login";

const Home = () => {
    return (
        <AuthProvider>
            <Login />
        </AuthProvider>
    );
};

export default Home;