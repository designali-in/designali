//@ts-nocheck
"use client"

import { useState, useEffect } from "react"
import { getUsers, deleteUser } from "@/actions/admin/admin-action"
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
import { Trash2, Search, UserX } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Badge } from "@/components/ui/badge"

export function UsersTable() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [userToDelete, setUserToDelete] = useState(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [visibleCount, setVisibleCount] = useState(5) // Initially show 5 users
  const { toast } = useToast()

  useEffect(() => {
    async function loadUsers() {
      try {
        const data = await getUsers()
        setUsers(data)
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load users",
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }

    loadUsers()
  }, [toast])

  const filteredUsers = users.filter(
    (user) =>
      user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  async function handleDeleteUser() {
    if (!userToDelete) return

    setIsDeleting(true)

    try {
      const result = await deleteUser(userToDelete.id)

      if (result.error) {
        toast({
          title: "Error",
          description: result.error,
          variant: "destructive",
        })
      } else {
        toast({
          title: "Success",
          description: "User deleted successfully",
        })
        setUsers(users.filter((user) => user.id !== userToDelete.id))
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete user",
        variant: "destructive",
      })
    } finally {
      setIsDeleting(false)
      setDialogOpen(false)
      setUserToDelete(null)
    }
  }

  if (loading) {
    return <div className="flex justify-center p-4">Loading users...</div>
  }

  return (
    <div className="space-y-4 overflow-hidden">
      <h1 className="text-3xl font-bold mb-6">Users <span className="text-ali">{users.length}</span></h1>
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search users..."
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
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center h-24">
                  No users found
                </TableCell>
              </TableRow>
            ) : (
              filteredUsers.slice(0, visibleCount).map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name || "—"}</TableCell>
                  <TableCell>{user.email || "—"}</TableCell>
                  <TableCell>{user.username || "—"}</TableCell>
                  <TableCell>
                    <Badge variant={user.role === "ADMIN" ? "default" : "outline"}>{user.role}</Badge>
                  </TableCell>
                  <TableCell>{new Date(user.createdAt).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => {
                        setUserToDelete(user)
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
      {visibleCount < filteredUsers.length && (
        <div className="flex justify-center mt-4">
          <Button onClick={() => setVisibleCount(visibleCount + 5)}>Load More</Button>
        </div>
      )}

      <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete the user account for{" "}
              <span className="font-semibold">{userToDelete?.name || userToDelete?.email}</span>.
              <br />
              <br />
              This action cannot be undone and will also delete:
              <ul className="list-disc pl-5 mt-2">
                <li>All assets created by this user</li>
                <li>All likes from this user</li>
                <li>All team memberships</li>
              </ul>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteUser}
              disabled={isDeleting}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {isDeleting ? (
                <>Deleting...</>
              ) : (
                <>
                  <UserX className="h-4 w-4 mr-2" />
                  Delete User
                </>
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}