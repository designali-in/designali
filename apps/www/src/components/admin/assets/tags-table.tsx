//@ts-nocheck
"use client"

import { useState, useEffect } from "react"
import { getTags, createTag, deleteTag } from "@/actions/admin/admin-action"
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
import { Trash2, Plus, Tag } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export function TagsTable() {
  const [tags, setTags] = useState([])
  const [loading, setLoading] = useState(true)
  const [newTagName, setNewTagName] = useState("")
  const [tagToDelete, setTagToDelete] = useState(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isCreating, setIsCreating] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    async function loadTags() {
      try {
        const data = await getTags()
        setTags(data)
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load tags",
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }

    loadTags()
  }, [toast])

  async function handleCreateTag(e) {
    e.preventDefault()

    if (!newTagName.trim()) {
      toast({
        title: "Error",
        description: "Tag name cannot be empty",
        variant: "destructive",
      })
      return
    }

    setIsCreating(true)

    try {
      const result = await createTag(newTagName)

      if (result.error) {
        toast({
          title: "Error",
          description: result.error,
          variant: "destructive",
        })
      } else {
        toast({
          title: "Success",
          description: "Tag created successfully",
        })
        setTags([...tags, result.tag])
        setNewTagName("")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create tag",
        variant: "destructive",
      })
    } finally {
      setIsCreating(false)
    }
  }

  async function handleDeleteTag() {
    if (!tagToDelete) return

    setIsDeleting(true)

    try {
      const result = await deleteTag(tagToDelete.id)

      if (result.error) {
        toast({
          title: "Error",
          description: result.error,
          variant: "destructive",
        })
      } else {
        toast({
          title: "Success",
          description: "Tag deleted successfully",
        })
        setTags(tags.filter((tag) => tag.id !== tagToDelete.id))
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete tag",
        variant: "destructive",
      })
    } finally {
      setIsDeleting(false)
      setDialogOpen(false)
      setTagToDelete(null)
    }
  }

  if (loading) {
    return <div className="flex justify-center p-4">Loading tags...</div>
  }

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold mb-6">Tags <span className="text-ali">{tags.length}</span></h1>
      <form onSubmit={handleCreateTag} className="flex items-center gap-2">
        <div className="relative flex-1">
          <Tag className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="New tag name..."
            className="pl-8"
            value={newTagName}
            onChange={(e) => setNewTagName(e.target.value)}
            disabled={isCreating}
          />
        </div>
        <Button type="submit" disabled={isCreating}>
          {isCreating ? (
            "Creating..."
          ) : (
            <>
              <Plus className="h-4 w-4 mr-1" />
              Add Tag
            </>
          )}
        </Button>
      </form>

      <div className="rounded-md border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Asset Count</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tags.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} className="text-center h-24">
                  No tags found
                </TableCell>
              </TableRow>
            ) : (
              tags.map((tag) => (
                <TableRow key={tag.id}>
                  <TableCell className="font-medium">{tag.name}</TableCell>
                  <TableCell>{tag._count?.assets || 0}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => {
                        setTagToDelete(tag)
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

      <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete the tag "{tagToDelete?.name}" and remove it from all associated assets.
              <br />
              <br />
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteTag}
              disabled={isDeleting}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {isDeleting ? "Deleting..." : "Delete Tag"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

