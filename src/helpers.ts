import { CATEGORY_TABS } from "./constants"
import type { Category } from "./types"

export function getCategoryLabel(categoryId: Category){
    const category = CATEGORY_TABS.find( (cat) => cat.id == categoryId )
    return category? category.label : categoryId
}