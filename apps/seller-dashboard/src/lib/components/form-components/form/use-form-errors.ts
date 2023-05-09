import { useEffect, useState } from "react";
import { FormInstance } from "antd";
import { DefaultObject } from "@types";

export default function useFormErrors(
    form: FormInstance,
    errors: Array<DefaultObject>,
    callback: () => void
) {
    const [lock, setLock] = useState<boolean>(false);

    useEffect(() => {
        if (errors && !lock) {
            setLock(true);
            setTimeout(() => callback(), 500);
            form.submit?.();
        } else setLock(false);
    }, [errors]);
}
