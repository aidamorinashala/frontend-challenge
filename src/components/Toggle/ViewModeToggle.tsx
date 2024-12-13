import { Grid, List } from 'lucide-react'
import { ViewMode } from '@/types'

interface ViewToggleModeProps {
  viewMode: ViewMode
  toggleViewMode: () => void
}

export const ViewModeToggle = ({
  viewMode,
  toggleViewMode,
}: ViewToggleModeProps) => {
  return (
    <button
      className={`flex items-center gap-2 px-4 py-2 border rounded-md font-medium ${
        viewMode === 'grid'
          ? 'bg-blue-900 text-white border-blue-500'
          : 'bg-white text-blue-500 border-blue-500'
      }`}
      onClick={toggleViewMode}
    >
      {viewMode === 'grid' ? <List size={18} /> : <Grid size={18} />}
      Switch to {viewMode === 'grid' ? 'List' : 'Grid'} View
    </button>
  )
}
