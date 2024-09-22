"use client";

import scss from "./page.module.scss";
import { googleAuthenticate } from "./loginAction";
import { useFormState } from "react-dom";
import { useSession, signOut } from "next-auth/react";

const Login = () => {
    const { data: session, status } = useSession({ required: false });

    const [errorMsgGoogle, dispatchGoogle] = useFormState(
        googleAuthenticate,
        undefined
    );

    return (
        <div>
            <br />
            <br />
            {status != "authenticated" ? (
                <ul>
                    <li>Login with Google</li>
                    <ul>
                        <li>
                            <form className="flex flex-col" action={dispatchGoogle}>
                                <button
                                    type="submit"
                                >
                                    Google Sign In
                                </button>
                                <p>{errorMsgGoogle}</p>
                            </form>
                        </li>
                    </ul>
                </ul>
            ) : (
                <ul>
                    <li>You are signed as below</li>
                    <ul>
                        <li>Your name</li>
                        <ul>
                            <li>{session.user?.name}</li>
                        </ul>
                        <li>Your email</li>
                        <ul>
                            <li>{session.user?.email}</li>
                        </ul>
                    </ul>
                    <li>
                        <button
                            onClick={() => signOut()}
                        >
                            Google Sign Out
                        </button>
                    </li>
                </ul>
            )}
            <br />
        </div>
    );
};

export default Login;