import { NOROFF_API } from "@/app/api/constants";
import { NextResponse } from "next/server";
import type { ErrorResponse } from "@/types/api/error";
import type { ApiResponse } from "@/types/api/apiresponse";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
): Promise<NextResponse> {
  const { id } = await params;

  try {
    const response = await fetch(`${NOROFF_API.SINGLE_PRODUCT(id)}`);

    if (!response.ok) {
      const errorData: ErrorResponse = await response.json();
      console.error("Error response:", errorData.errors[0].message);
      return NextResponse.json({ error: errorData.errors[0].message }, { status: 500 });
    }

    const data: ApiResponse = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
