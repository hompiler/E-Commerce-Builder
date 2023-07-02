import React from "react";
import useDisableNavigation from "@layout/helpers/layout-context/use-disable-navigation";
import Form from "@components/form-components/form";
import Input from "@components/form-components/input";
import Button from "@components/buttons/Button";
import Image from "next/image";
import AuthLayout from "@features/auth/ui/_common/auth-layout";
import Link from "next/link";

export default function Register({}) {
    useDisableNavigation();
    return (
        <AuthLayout image={"/images/register-icon.svg"} maxWidth={"90%"}>
            <Form onFinish={() => {}}>

                <div className={"column gap-6"}>
                    <div>
                        <div className="h3">Join Us!</div>
                        <div className="subtitle2 text-gray-700">
                            Continue with Google or enter your details.
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                            label="First Name"
                            type="text"
                            placeholder="first Name"
                        />
                        <Input
                            label="Last Name"
                            type="text"
                            placeholder="Last Name"
                        />
                    </div>
                    <Input label="Email" type="email" placeholder="Email" />
                    <Input
                        label="password"
                        type="password"
                        placeholder="password"
                    />
                    <Button width="large" variant="primary">
                        Sign Up
                    </Button>
                </div>

                <p className="subtitle2 text-center mt-3">
                    Already have an account?{" "}
                    <Link className={"text-primary hover:text-primary-700"} href={"/auth/login"}>
                        Log in
                    </Link>
                </p>
            </Form>
        </AuthLayout>
    );
}
