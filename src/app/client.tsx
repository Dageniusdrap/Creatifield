'use client';

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

// <-- hooks can only be used in client components

export const Client = () => {
    const trpc = useTRPC();
    const { data: users } = useSuspenseQuery(trpc.getUsers.queryOptions());
    return (
        <div>
            Client Component: {JSON.stringify(users)}
        </div>
    )
        
}