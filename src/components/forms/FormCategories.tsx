import React, { useState, useEffect } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { createCategory, createSubcategory, getCategories } from '@/api/categories'

export default function FormCategories() {
  const [categoryName, setCategoryName] = useState('')
  const [subcategoryName, setSubcategoryName] = useState('')
  const [selectedCategoryId, setSelectedCategoryId] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const queryClient = useQueryClient()

  const { data: categories, isLoading, isError } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  })

  const createCategoryMutation = useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries(['categories'])
      setSuccess('Category created successfully')
      setCategoryName('')
    },
    onError: (error) => {
      setError('Failed to create category')
    },
  })

  const createSubcategoryMutation = useMutation({
    mutationFn: createSubcategory,
    onSuccess: () => {
      queryClient.invalidateQueries(['categories'])
      setSuccess('Subcategory created successfully')
      setSubcategoryName('')
      setSelectedCategoryId('')
    },
    onError: (error) => {
      setError('Failed to create subcategory')
    },
  })

  const handleCreateCategory = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    if (!categoryName.trim()) {
      setError('Category name is required')
      return
    }
    createCategoryMutation.mutate({ name: categoryName })
  }

  const handleCreateSubcategory = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    if (!subcategoryName.trim()) {
      setError('Subcategory name is required')
      return
    }
    if (!selectedCategoryId) {
      setError('Please select a parent category')
      return
    }
    createSubcategoryMutation.mutate({ name: subcategoryName, categoryId: selectedCategoryId })
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setError('')
      setSuccess('')
    }, 5000)
    return () => clearTimeout(timer)
  }, [error, success])

  if (isLoading) return <div>Loading categories...</div>
  if (isError) return <div>Error loading categories</div>

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Manage Categories</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="category" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="category">Create Category</TabsTrigger>
            <TabsTrigger value="subcategory">Create Subcategory</TabsTrigger>
          </TabsList>
          <TabsContent value="category">
            <form onSubmit={handleCreateCategory} className="space-y-4">
              <div>
                <Label htmlFor="categoryName">Category Name</Label>
                <Input
                  id="categoryName"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  placeholder="Enter category name"
                />
              </div>
              <Button type="submit" className="w-full">Create Category</Button>
            </form>
          </TabsContent>
          <TabsContent value="subcategory">
            <form onSubmit={handleCreateSubcategory} className="space-y-4">
              <div>
                <Label htmlFor="parentCategory">Parent Category</Label>
                <Select onValueChange={setSelectedCategoryId} value={selectedCategoryId}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories?.map((category: any) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="subcategoryName">Subcategory Name</Label>
                <Input
                  id="subcategoryName"
                  value={subcategoryName}
                  onChange={(e) => setSubcategoryName(e.target.value)}
                  placeholder="Enter subcategory name"
                />
              </div>
              <Button type="submit" className="w-full">Create Subcategory</Button>
            </form>
          </TabsContent>
        </Tabs>
        {error && (
          <Alert variant="destructive" className="mt-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {success && (
          <Alert variant="default" className="mt-4">
            <AlertDescription>{success}</AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  )
}