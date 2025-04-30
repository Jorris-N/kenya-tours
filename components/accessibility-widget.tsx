"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Accessibility, Type, Sun, Eye } from "lucide-react"
import { useTheme } from "next-themes"

export default function AccessibilityWidget() {
  const [fontSize, setFontSize] = useState(100)
  const [highContrast, setHighContrast] = useState(false)
  const { setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const changeFontSize = (value: number[]) => {
    const newSize = value[0]
    setFontSize(newSize)
    document.documentElement.style.fontSize = `${newSize}%`
  }

  const resetFontSize = () => {
    setFontSize(100)
    document.documentElement.style.fontSize = "100%"
  }

  const toggleHighContrast = (checked: boolean) => {
    setHighContrast(checked)
    if (checked) {
      document.documentElement.classList.add("high-contrast")
    } else {
      document.documentElement.classList.remove("high-contrast")
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed left-5 bottom-5 z-50 rounded-full bg-background shadow-lg border-primary"
          aria-label="Accessibility options"
        >
          <Accessibility className="h-5 w-5 text-primary" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="start" alignOffset={-40} side="top">
        <div className="space-y-4">
          <h3 className="font-medium text-lg">Accessibility Options</h3>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="font-size" className="text-sm font-medium flex items-center">
                <Type className="h-4 w-4 mr-2" />
                Text Size
              </label>
              <Button variant="outline" size="sm" onClick={resetFontSize}>
                Reset
              </Button>
            </div>
            <Slider
              id="font-size"
              min={75}
              max={150}
              step={5}
              value={[fontSize]}
              onValueChange={changeFontSize}
              className="py-2"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>A</span>
              <span className="text-base">A</span>
              <span className="text-lg">A</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center">
              <Sun className="h-4 w-4 mr-2" />
              Theme
            </label>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1" onClick={() => setTheme("light")}>
                Light
              </Button>
              <Button variant="outline" size="sm" className="flex-1" onClick={() => setTheme("dark")}>
                Dark
              </Button>
              <Button variant="outline" size="sm" className="flex-1" onClick={() => setTheme("system")}>
                System
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center">
              <Eye className="h-4 w-4 mr-2" />
              High Contrast
            </label>
            <div className="flex items-center space-x-2">
              <Switch id="high-contrast" checked={highContrast} onCheckedChange={toggleHighContrast} />
              <Label htmlFor="high-contrast">Enable high contrast</Label>
            </div>
          </div>

          <p className="text-xs text-muted-foreground">
            These settings help make our website more accessible for users with different needs.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  )
}
