import React from "react";
import { lazy, Suspense } from "react";
const HeavyComponent = lazy(() => import('./BirthdayCard'));

function LazyLoadedComponent() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <HeavyComponent/>
        </Suspense>
    )
}

export default LazyLoadedComponent;