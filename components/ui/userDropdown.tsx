"use client";

import { UserButton } from "@clerk/nextjs";

export default function UserDropdown() {
    return (
        <UserButton showName/>
    );
}