"use client"
import { NextUIProvider } from "@nextui-org/react";

export default function LayoutChild({ children }) {
    return <NextUIProvider >
        {children}
    </NextUIProvider>
}