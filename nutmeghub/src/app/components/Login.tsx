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
            {status != "authenticated" ? (
                            <form className="flex flex-col" action={dispatchGoogle}>
                                <button
                                    type="submit"
                                >
                                    Google Sign In
                                </button>
                                <p>{errorMsgGoogle}</p>
                            </form>
            ) : (
                    <li>
                        <button
                            onClick={() => signOut()}
                        >
                            Google Sign Out
                        </button>
                    </li>
            )}
        </div>
    );
};

export default Login;