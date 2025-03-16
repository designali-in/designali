//@ts-nocheck
"use client"

import { useState, useEffect } from "react"
import { getNewsletterSubscribers } from "@/actions/admin/admin-action"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export function NewsletterTable() {
  const [subscribers, setSubscribers] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const { toast } = useToast()

  useEffect(() => {
    async function loadSubscribers() {
      try {
        const data = await getNewsletterSubscribers()
        setSubscribers(data)
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load newsletter subscribers",
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }

    loadSubscribers()
  }, [toast])

  const filteredSubscribers = subscribers.filter((subscriber) =>
    subscriber.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  if (loading) {
    return <div className="flex justify-center p-4">Loading subscribers...</div>
  }

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold mb-6">Newsletter <span className="text-ali">{subscribers.length}</span></h1>
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search subscribers..."
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
              <TableHead>Email</TableHead>
              <TableHead>Subscribed Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredSubscribers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={2} className="text-center h-24">
                  No subscribers found
                </TableCell>
              </TableRow>
            ) : (
              filteredSubscribers.map((subscriber) => (
                <TableRow key={subscriber.id}>
                  <TableCell className="font-medium">{subscriber.email}</TableCell>
                  <TableCell>{new Date(subscriber.createdAt).toLocaleDateString()}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

