import { QueryClient } from "@tanstack/react-query";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    let message = res.statusText;
    
    try {
      const body = await res.json();
      if (body && typeof body.message === "string") {
        message = body.message;
      }
    } catch {
      // ignore
    }

    throw new Error(message);
  }
}

async function defaultQueryFn({ queryKey }: { queryKey: readonly unknown[] }): Promise<any> {
  const res = await fetch(queryKey[0] as string);
  await throwIfResNotOk(res);
  return res.json();
}

export async function apiRequest(
  url: string,
  options?: RequestInit
): Promise<any> {
  const res = await fetch(url, options);
  await throwIfResNotOk(res);
  return res.json();
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
      staleTime: 1000 * 60,
      refetchOnWindowFocus: false,
    },
  },
});
