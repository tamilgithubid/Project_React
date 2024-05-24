import React, { useState, useTransition } from 'react';
import { Button } from "@/components/ui/button"


// Simulate an asynchronous operation
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function updateNames(name) {
    console.log('Updating name:', name);
    await wait(4000);
    return null;
}

export function UpdateName() {
    const [error, setError] = useState(null);
    const [isPending, startTransition] = useTransition();

    const submitAction = async (event) => {
        event.preventDefault();
        startTransition(() => {
            setError(null);
            isPending(true);
        });

        const formData = new FormData(event.target);

        try {
            const error = await updateNames(formData.get("name"));
            if (error) {
                setError(error);
            }
        } catch (err) {
            setError('An unexpected error occurred');
        } finally {
            isPending(false);
        }
    };

    return (
        <form onSubmit={submitAction}>

            <Button type="submit" disabled={isPending}>
                {isPending ? "Updating..." : "Update"}
            </Button>
            {error && <p>{error}</p>}
        </form>
    );
}
