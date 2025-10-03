import { api } from "@lib/api";
import { EditRecipe } from "./components/EditRecipe";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async ({ params }: PageProps) => {
  const { id } = await params;
  const recipe = await api.getRecipe(id);
  if (!recipe) {
    return <div>Error finding recipe</div>;
  }

  return <EditRecipe recipe={recipe} />;
};
