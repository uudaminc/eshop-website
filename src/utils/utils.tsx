import { FiltersState } from "@/types";

export function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export function buildAlgoliaFilters(filters: FiltersState): string {
  return Object.keys(filters)
    .map((key) => filters[key].map((value) => `${key}:${value}`).join(" OR "))
    .filter((filter) => filter)
    .join(" AND ");
}