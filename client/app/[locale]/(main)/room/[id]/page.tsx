import { RoomPage } from "@room/[id]/ui";

export default async function Room({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	return <RoomPage id={id} />;
}
