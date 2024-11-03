'use client'

import React from "react"
import { Bell, ChevronDown, LayoutDashboard, MessageSquare, PlusCircle, Settings, Users } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function SocialMediaPanelComponent() {
  return (
    <div className="bg-background min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Social Media Dashboard</h1>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      <nav className="border-b">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-4">
            <li>
              <Button variant="ghost" className="flex items-center space-x-2">
                <LayoutDashboard className="h-4 w-4" />
                <span>Dashboard</span>
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="flex items-center space-x-2">
                <MessageSquare className="h-4 w-4" />
                <span>Posts</span>
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Audience</span>
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="flex items-center space-x-2">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Button>
            </li>
          </ul>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Schedule Post</CardTitle>
              <CardDescription>Create and schedule your social media posts</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select platform" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="facebook">Facebook</SelectItem>
                    <SelectItem value="twitter">Twitter</SelectItem>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="linkedin">LinkedIn</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea placeholder="What's on your mind?" />
                <div className="flex space-x-2">
                  <Input type="datetime-local" />
                  <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Schedule
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Analytics Overview</CardTitle>
              <CardDescription>Your social media performance at a glance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Total Followers</p>
                  <p className="text-2xl font-bold">24.5K</p>
                  <p className="text-sm text-green-600">+2.5% this week</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Engagement Rate</p>
                  <p className="text-2xl font-bold">3.2%</p>
                  <p className="text-sm text-red-600">-0.5% this week</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Total Posts</p>
                  <p className="text-2xl font-bold">128</p>
                  <p className="text-sm text-green-600">+12 this week</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Avg. Reach</p>
                  <p className="text-2xl font-bold">5.7K</p>
                  <p className="text-sm text-green-600">+1.2K this week</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Recent Posts</CardTitle>
            <CardDescription>Your latest social media activity</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {[
                { platform: "Twitter", content: "Just launched our new product! Check it out at...", engagement: "352 likes • 48 retweets" },
                { platform: "Facebook", content: "We're hiring! Join our team and help us build the future...", engagement: "89 likes • 23 comments" },
                { platform: "Instagram", content: "Behind the scenes at our annual team retreat! #TeamBuilding", engagement: "1.2K likes • 78 comments" },
                { platform: "LinkedIn", content: "Excited to announce our partnership with...", engagement: "456 reactions • 34 comments" },
              ].map((post, index) => (
                <li key={index} className="flex items-start space-x-4 p-4 border rounded-lg">
                  <div className="flex-shrink-0">
                    <Avatar>
                      <AvatarFallback>{post.platform[0]}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex-grow">
                    <p className="font-medium">{post.platform}</p>
                    <p className="text-sm text-muted-foreground mt-1">{post.content}</p>
                    <p className="text-xs text-muted-foreground mt-2">{post.engagement}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}