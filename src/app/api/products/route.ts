import { NOROFF_API } from "@api/constants";
import { NextResponse } from "next/server";
import type { ErrorResponse } from "@/types/api/error";
import type { ApiResponse } from "@/types/api/apiresponse";

export async function GET(): Promise<NextResponse> {
  try {
    const response = await fetch(NOROFF_API.ALL_PRODUCTS);

    if (!response.ok) {
      const errorData: ErrorResponse = await response.json();
      console.error("Error response:", errorData.errors[0].message);
      return NextResponse.json({ error: errorData.errors[0].message }, { status: 500 });
    }

    const data: ApiResponse = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
