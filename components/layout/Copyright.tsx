import { connection } from "next/server";
import { Suspense } from "react";

async function Year() {
  await connection();
  return new Date().getFullYear();
}

export function Copyright() {
  return (
    <p>
      ©{" "}
      <Suspense fallback={2026}>
        <Year />
      </Suspense>{" "}
      J&E Events. All rights reserved.
    </p>
  );
}
