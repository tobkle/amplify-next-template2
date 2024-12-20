"use client"

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

export default function Auth({children}:{ children: any}) {
    return <Authenticator>{children}</Authenticator>
}