//@ts-nocheck
"use client"

import { useState, useEffect } from "react"
import { getAssets, deleteAsset } from "@/actions/admin/admin-action"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Trash2, Search, FileX, Eye, Download } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Badge } from "@/components/ui/badge"

export function AssetsTable() {
  const [assets, setAssets] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [assetToDelete, setAssetToDelete] = useState(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [visibleCount, setVisibleCount] = useState(5) // Initially show 5 assets
  const { toast } = useToast()

  useEffect(() => {
    async function loadAssets() {
      try {
        const data = await getAssets()
        setAssets(data)
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load assets",
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }

    loadAssets()
  }, [toast])

  const filteredAssets = assets.filter(
    (asset) =>
      asset.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.description?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  async function handleDeleteAsset() {
    if (!assetToDelete) return

    setIsDeleting(true)

    try {
      const result = await deleteAsset(assetToDelete.id)

      if (result.error) {
        toast({
          title: "Error",
          description: result.error,
          variant: "destructive",
        })
      } else {
        toast({
          title: "Success",
          description: "Asset deleted successfully",
        })
        setAssets(assets.filter((asset) => asset.id !== assetToDelete.id))
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete asset",
        variant: "destructive",
      })
    } finally {
      setIsDeleting(false)
      setDialogOpen(false)
      setAssetToDelete(null)
    }
  }

  if (loading) {
    return <div className="flex justify-center p-4">Loading assets...</div>
  }

  return (
    <div className="space-y-4">
       <h1 className="text-3xl font-bold mb-6">Assets <span className="text-ali">{assets.length}</span></h1>
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search assets..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-md border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Owner</TableHead>
              <TableHead>Stats</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Tags</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAssets.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center h-24">
                  No assets found
                </TableCell>
              </TableRow>
            ) : (
              filteredAssets.slice(0, visibleCount).map((asset) => (
                <TableRow key={asset.id}>
                  <TableCell className="font-medium">
                    <div className="max-w-[200px] truncate" title={asset.title}>
                      {asset.title}
                    </div>
                    {asset.description && (
                      <div className="text-xs text-muted-foreground max-w-[200px] truncate" title={asset.description}>
                        {asset.description}
                      </div>
                    )}
                  </TableCell>
                  <TableCell>{asset.user?.name || asset.user?.username || "Unknown"}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <span className="flex items-center text-xs">
                        <Eye className="h-3 w-3 mr-1" /> {asset.views}
                      </span>
                      <span className="flex items-center text-xs">
                        <Download className="h-3 w-3 mr-1" /> {asset.downloads}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{new Date(asset.createdAt).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {asset.tags?.length > 0 ? (
                        asset.tags.map((tag) => (
                          <Badge key={tag.id} variant="outline" className="text-xs">
                            {tag.name}
                          </Badge>
                        ))
                      ) : (
                        <span className="text-xs text-muted-foreground">No tags</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => {
                        setAssetToDelete(asset)
                        setDialogOpen(true)
                      }}
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Load More Button */}
      {visibleCount < filteredAssets.length && (
        <div className="flex justify-center mt-4">
          <Button onClick={() => setVisibleCount(visibleCount + 5)}>Load More</Button>
        </div>
      )}

      <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete the asset "{assetToDelete?.title}".
              <br />
              <br />
              This action cannot be undone and will also delete:
              <ul className="list-disc pl-5 mt-2">
                <li>All likes associated with this asset</li>
                <li>All tag associations</li>
              </ul>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteAsset}
              disabled={isDeleting}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {isDeleting ? (
                <>Deleting...</>
              ) : (
                <>
                  <FileX className="h-4 w-4 mr-2" />
                  Delete Asset
                </>
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}