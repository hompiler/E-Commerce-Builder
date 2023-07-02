import React from "react";
import AuthLayout from "@features/auth/ui/_common/auth-layout";
import Input from "@components/form-components/input";
import Button from "@components/buttons/Button";
import Form from "@components/form-components/form";
import useDisableNavigation from "@layout/helpers/layout-context/use-disable-navigation";
import Link from "next/link";

export default function Login({}) {
    useDisableNavigation();

    return (
        <AuthLayout image={"/images/login-icon.svg"}>
            <Form onFinish={() => {}}>
                <div className={"column gap-6"}>
                    <div>
                        <div className="h3">Welcome Back!</div>
                        <div className="subtitle2 text-gray-700">
                            Continue with Google or enter your details.
                        </div>
                    </div>

                    <Input label="Email" type="email" placeholder="Email" />
                    <Input
                        label="password"
                        type="password"
                        placeholder="password"
                    />
                    <Button width="large" variant="primary">
                        Login
                    </Button>
                </div>
                <p className="subtitle2 text-center mt-3">
                    Don’t have an account?{" "}
                    <Link
                        className={"text-primary hover:text-primary-700"}
                        href={"/auth/register"}
                    >
                        Sign up
                    </Link>
                </p>
            </Form>
        </AuthLayout>
    );
}
