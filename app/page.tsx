import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Hotel, Building2, Calendar, Image } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Hotel Social Media Management
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Create, schedule, and manage your hotel's social media content with AI-powered assistance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Hotel className="w-12 h-12 mb-4 text-primary" />
              <CardTitle>AI Content Generation</CardTitle>
              <CardDescription>
                Generate engaging captions and hashtags tailored to your hotel's brand
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/dashboard/content">Get Started</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Image className="w-12 h-12 mb-4 text-primary" />
              <CardTitle>Visual Editor</CardTitle>
              <CardDescription>
                Create stunning visuals with our drag-and-drop editor and templates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/dashboard/editor">Create Post</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Calendar className="w-12 h-12 mb-4 text-primary" />
              <CardTitle>Schedule & Analyze</CardTitle>
              <CardDescription>
                Plan your content calendar and track performance across platforms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/dashboard/schedule">Schedule Posts</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" asChild>
            <Link href="/dashboard">
              Access Dashboard
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}