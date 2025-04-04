"use client"

import { useState, useEffect } from "react"
import { Facebook, Twitter, Linkedin, Mail, LinkIcon, Share2, Check, Instagram } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { DIcons } from "dicons"

interface ShareButtonProps {
  url: string
  title?: string
  description?: string
  className?: string
  imageUrl?: string
}

export function ShareButton({
  url = typeof window !== "undefined" ? window.location.href : "",
  title = "Check this out!",
  description = "I thought you might find this interesting",
  className,
  imageUrl,
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false)
  const [shareCount, setShareCount] = useState(0)

  // Initialize share count from localStorage on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCount = localStorage.getItem(`shareCount-${url}`)
      if (savedCount) {
        setShareCount(parseInt(savedCount, 10))
      }
    }
  }, [url])

  // Save share count to localStorage when it changes
  useEffect(() => {
    if (typeof window !== "undefined" && shareCount > 0) {
      localStorage.setItem(`shareCount-${url}`, shareCount.toString())
    }
  }, [shareCount, url])

  const incrementShareCount = () => {
    setShareCount(prevCount => prevCount + 1)
  }

  const shareLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
    {
      name: "Pinterest",
      icon: (props: any) => (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          {...props}
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          <circle cx="12" cy="12" r="10" />
          <path d="M8 11.5c4 6 8.5 0 8.5 0" />
        </svg>
      ),
      url: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(description)}&media=${encodeURIComponent(imageUrl || '')}`,
    }, 
    {
      name: "Email",
      icon: Mail,
      url: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(description + "\n\n" + url)}`,
    },
  ]

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      incrementShareCount()
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          
          className={cn("gap-2", className)}
        >
          <Share2 className="h-4 w-4" />
          Share
          {shareCount > 0 && (
            <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
              {shareCount}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {shareLinks.map((link) => (
          <DropdownMenuItem key={link.name} asChild>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full cursor-pointer items-center gap-2"
              onClick={(e) => {
                if (false) {
                  // Add your condition logic here if needed
                } else {
                  e.preventDefault()
                  window.open(link.url, "_blank", "width=800,height=800")
                }
                incrementShareCount()
              }}
            >
              <link.icon className="h-4 w-4" />
              {link.name} 
            </a>
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem onClick={copyToClipboard} className="flex gap-2">
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              Copied!
            </>
          ) : (
            <>
              <LinkIcon className="h-4 w-4" />
              Copy link
            </>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
