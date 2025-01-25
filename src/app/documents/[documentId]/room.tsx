"use client";

import {
    ClientSideSuspense,
    LiveblocksProvider,
    RoomProvider,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";
import { ReactNode } from "react";

export function Room({ children }: { children: ReactNode }) {
    const params = useParams();
    return (
        <LiveblocksProvider publicApiKey={"pk_dev_5JbN1Atah3k5jzrHh3WiVBZneQaNZlv8r3kH-oUTTCxPZQ6P2f0R3ovWr0tLcu9k"}>
            <RoomProvider id={params.documentId as string}>
                <ClientSideSuspense fallback={<div>Loading…</div>}>
                    {children}
                </ClientSideSuspense>
            </RoomProvider>
        </LiveblocksProvider>
    );
}